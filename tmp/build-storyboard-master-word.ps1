$ErrorActionPreference = "Stop"
$root = 'C:\Users\keith\European-Corporate-Pivot\Articulate assets\Storyboard Master'

try {
  $live = [Runtime.InteropServices.Marshal]::GetActiveObject("Word.Application")
  $docs = @($live.Documents)
  foreach ($d in $docs) {
    $n = $d.FullName
    if ($n -like "*Storyboard Master*") {
      $d.Close(0)
    }
  }
} catch {}

$filledHtml = Join-Path $root 'Portfolio sample_Before you paste classify.html'
$filledDocx = Join-Path $root 'Portfolio sample_Before you paste classify.docx'
$blankHtml = Join-Path $root 'Storyboard Master - blank.html'
$blankDocx = Join-Path $root 'Storyboard Master - blank.docx'
$brandHtml = Join-Path $root 'Portfolio sample_Before you paste classify - brand.html'
$brandPdf = Join-Path $root 'Portfolio sample_Before you paste classify.pdf'

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0

function Set-FirstSectionPortrait {
  param($doc)
  foreach ($sec in $doc.Sections) {
    $ps = $sec.PageSetup
    $ps.Orientation = 1
    $ps.PaperSize = 7
    $ps.LeftMargin = 36
    $ps.RightMargin = 36
    $ps.TopMargin = 28
    $ps.BottomMargin = 28
  }
  $broke = $false
  try {
    if ($doc.Bookmarks.Exists("LANDSCAPE")) {
      $doc.Bookmarks.Item("LANDSCAPE").Range.InsertBreak(2)
      $broke = $true
    }
  } catch {}
  if (-not $broke) {
    $rng = $doc.Content.Duplicate
    $f = $rng.Find
    $f.ClearFormatting() | Out-Null
    $f.Forward = $true
    $f.Wrap = 1
    $f.Text = "Block 02"
    if ($f.Execute()) {
      $rng.Collapse(1)
      $rng.InsertBreak(2)
      $broke = $true
    }
  }
  if ($broke -and $doc.Sections.Count -ge 2) {
    $s1 = $doc.Sections.Item(1).PageSetup
    $s1.Orientation = 0
    $s1.PaperSize = 7
    $s1.LeftMargin = 36
    $s1.RightMargin = 36
    $s1.TopMargin = 36
    $s1.BottomMargin = 36
    for ($i = 2; $i -le $doc.Sections.Count; $i++) {
      $ps = $doc.Sections.Item($i).PageSetup
      $ps.Orientation = 1
      $ps.PaperSize = 7
    }
  }
}

function Get-WdColor([int]$r, [int]$g, [int]$b) {
  return $r + ($g * 256) + ($b * 65536)
}

function Restore-CellFills {
  param($doc)
  $ink = Get-WdColor 59 59 59
  $step = Get-WdColor 230 230 230
  foreach ($t in $doc.Tables) {
    $cols = $t.Columns.Count
    $rows = $t.Rows.Count
    $nest = 1
    try { $nest = $t.NestingLevel } catch {}
    if ($cols -eq 5) {
      for ($c = 1; $c -le 5; $c++) {
        $cell = $t.Cell(1, $c)
        $cell.Shading.BackgroundPatternColor = $step
      }
    }
    if ($cols -eq 2 -and $rows -eq 4) {
      for ($r = 1; $r -le $rows; $r++) {
        $t.Cell($r, 1).Shading.BackgroundPatternColor = $step
      }
    }
    if ($cols -eq 2 -and $rows -ge 6 -and $nest -eq 1) {
      for ($r = 1; $r -le $rows; $r++) {
        $label = ($t.Cell($r, 1).Range.Text -replace "[\r\n\x07\u00A0]", "").Trim()
        if (-not $label) {
          foreach ($cell in $t.Rows.Item($r).Cells) {
            $cell.Shading.BackgroundPatternColor = -16777216
          }
          continue
        }
        $t.Cell($r, 1).Shading.BackgroundPatternColor = $step
      }
    }
    if ($cols -eq 1) {
      try { $t.Cell(1, 1).Shading.BackgroundPatternColor = $step } catch {}
    }
    if ($cols -eq 2) {
      for ($r = 1; $r -le $rows; $r++) {
        try {
          $text = $t.Cell($r, 2).Range.Text
        } catch { continue }
        if ($text -match '#([0-9A-Fa-f]{6})') {
          $hex = $Matches[1]
          $rr = [Convert]::ToInt32($hex.Substring(0, 2), 16)
          $gg = [Convert]::ToInt32($hex.Substring(2, 2), 16)
          $bb = [Convert]::ToInt32($hex.Substring(4, 2), 16)
          $fill = $t.Cell($r, 1)
          $fill.Shading.BackgroundPatternColor = (Get-WdColor $rr $gg $bb)
          for ($e = 1; $e -le 4; $e++) {
            $fill.Borders.Item($e).LineStyle = 1
            $fill.Borders.Item($e).LineWidth = 12
            $fill.Borders.Item($e).Color = $ink
          }
        }
      }
      if ($nest -gt 1) {
        try { $t.Cell(1, 1).Shading.BackgroundPatternColor = $step } catch {}
      }
    }
  }
}

function Get-UsableWidth {
  param($table)
  $ps = $table.Range.Sections.Item(1).PageSetup
  return $ps.PageWidth - $ps.LeftMargin - $ps.RightMargin
}

function Lock-CardOnOnePage {
  param($table)
  foreach ($row in $table.Rows) {
    try { $row.AllowBreakAcrossPages = $false } catch {}
  }
  try { $table.AllowPageBreaks = $false } catch {}
  $n = $table.Rows.Count
  for ($r = 1; $r -le $n; $r++) {
    $keepNext = ($r -lt $n)
    foreach ($cell in $table.Rows.Item($r).Cells) {
      $cell.Range.ParagraphFormat.KeepTogether = $true
      $cell.Range.ParagraphFormat.KeepWithNext = $keepNext
    }
  }
  $pre = $table.Range.Duplicate
  $pre.Collapse(1)
  $moved = $pre.MoveStart(4, -1)
  if ($moved) {
    $p = $pre.Paragraphs.Item(1)
    $inTable = $false
    try { $inTable = [bool]$p.Range.Information(12) } catch {}
    if (-not $inTable) {
      $p.KeepWithNext = $true
      $p.KeepTogether = $true
    }
  }
}

function Assert-CardsStayOnOnePage {
  param($doc)
  $doc.Repaginate()
  $bad = @()
  foreach ($t in $doc.Tables) {
    $nest = 1
    try { $nest = $t.NestingLevel } catch {}
    if ($nest -ne 1 -or $t.Columns.Count -ne 2 -or $t.Rows.Count -ne 4) { continue }
    $start = $t.Range.Duplicate
    $start.Collapse(1)
    $end = $t.Range.Duplicate
    $end.MoveEnd(1, -1) | Out-Null
    $sp = $start.Information(3)
    $ep = $end.Information(3)
    if ($sp -ne $ep) {
      $snip = ($t.Cell(1, 2).Range.Text -replace "[\r\n\x07]", " ").Trim()
      if ($snip.Length -gt 48) { $snip = $snip.Substring(0, 48) }
      $bad += ("pages {0}-{1} {2}" -f $sp, $ep, $snip)
    }
  }
  if ($bad.Count -gt 0) {
    throw ("A storyboard table still crosses a page: " + ($bad -join "; "))
  }
}

function Set-TableLayout {
  param($doc)
  foreach ($t in $doc.Tables) {
    $cols = $t.Columns.Count
    $rows = $t.Rows.Count
    $nest = 1
    try { $nest = $t.NestingLevel } catch {}
    $pair = ($cols -eq 3 -and $rows -eq 1 -and $nest -eq 1)
    if ($pair) {
      $t.TopPadding = 0
      $t.BottomPadding = 0
      $t.LeftPadding = 0
      $t.RightPadding = 0
    } else {
      $t.TopPadding = 6
      $t.BottomPadding = 6
      $t.LeftPadding = 8
      $t.RightPadding = 8
    }
    foreach ($row in $t.Rows) {
      try { $row.AllowBreakAcrossPages = $false } catch {}
    }
    $usable = Get-UsableWidth $t
    if ($pair) {
      $t.PreferredWidthType = 1
      $t.PreferredWidth = $usable
      $t.AutoFitBehavior(0) | Out-Null
      $gap = 10
      $half = [Math]::Floor(($usable - $gap) / 2)
      $t.Columns.Item(1).SetWidth($half, 0)
      $t.Columns.Item(2).SetWidth($gap, 0)
      $t.Columns.Item(3).SetWidth($usable - $half - $gap, 0)
    } elseif ($cols -eq 2 -and $rows -eq 4) {
      $t.PreferredWidthType = 1
      $t.PreferredWidth = $usable
      $t.AutoFitBehavior(0) | Out-Null
      $t.Columns.Item(1).SetWidth(120, 0)
      $t.Columns.Item(2).SetWidth($usable - 120, 0)
      Lock-CardOnOnePage $t
    } elseif ($cols -eq 2 -and $rows -ge 6 -and $nest -eq 1) {
      $t.PreferredWidthType = 1
      $t.PreferredWidth = $usable
      $t.AutoFitBehavior(0) | Out-Null
      $t.Columns.Item(1).SetWidth(120, 0)
      $t.Columns.Item(2).SetWidth($usable - 120, 0)
      for ($r = 1; $r -le $rows; $r++) {
        $label = ($t.Cell($r, 1).Range.Text -replace "[\r\n\x07\u00A0]", "").Trim()
        if ($label) { continue }
        foreach ($cell in $t.Rows.Item($r).Cells) {
          $cell.TopPadding = 0
          $cell.BottomPadding = 0
          $cell.LeftPadding = 0
          $cell.RightPadding = 0
        }
        $gap = $t.Rows.Item($r)
        $gap.HeightRule = 2
        $gap.Height = 8
      }
    } elseif ($nest -gt 1) {
      $t.PreferredWidthType = 2
      $t.PreferredWidth = 100
      $t.AutoFitBehavior(0) | Out-Null
    }
  }
}

function Write-FooterRange {
  param($ftr, [string]$Prefix, [bool]$OfTotal, $ink)
  $rng = $ftr.Range
  $rng.Text = "$Prefix page "
  $rng.Collapse(0)
  $rng.Fields.Add($rng, 33) | Out-Null
  if ($OfTotal) {
    $end = $ftr.Range
    $end.Collapse(0)
    $end.InsertAfter(" of ")
    $end.Collapse(0)
    $end.Fields.Add($end, 26) | Out-Null
  }
  $ftr.Range.Font.Name = "Calibri"
  $ftr.Range.Font.Size = 14
  $ftr.Range.Font.Color = $ink
  $ftr.Range.ParagraphFormat.Alignment = 1
  $ftr.Range.Fields.Update()
}

function Set-PageFooter {
  param($doc, [string]$Prefix, [switch]$OfTotal)
  $ink = Get-WdColor 59 59 59
  $useTotal = [bool]$OfTotal
  foreach ($sec in $doc.Sections) {
    $ps = $sec.PageSetup
    $ps.OddAndEvenPagesHeaderFooter = 0
    $ps.DifferentFirstPageHeaderFooter = 0
    $ftr = $sec.Footers.Item(1)
    if ($sec.Index -gt 1) {
      try { $ftr.LinkToPrevious = $false } catch {}
    }
    Write-FooterRange $ftr $Prefix $useTotal $ink
  }
}

function Remove-BodyFooterParas {
  param($doc, [string]$BareLine)
  $count = $doc.Paragraphs.Count
  for ($i = $count; $i -ge 1; $i--) {
    $p = $doc.Paragraphs.Item($i)
    $inTable = $false
    try { $inTable = [bool]$p.Range.Information(12) } catch {}
    if ($inTable) { continue }
    $t = ($p.Range.Text -replace "[\r\x07]", "").Trim()
    if (-not $t -or $t.Length -gt 200) { continue }
    $isFoot = ($t -match 'page \d') -or
      ($t -match 'Brand Guideline ROM') -or
      ($t -match 'Portfolio sample' -and $t -match 'Before you paste') -or
      ($t -match '\[Company name\]' -and $t -match '\[Project name\]')
    if ($isFoot) {
      $p.Range.Delete() | Out-Null
    }
  }
}

function Convert-HtmlToDocx {
  param([string]$HtmlPath, [string]$DocxPath, [string]$FooterPrefix, [string]$BareLine, [switch]$OfTotal)
  $html = (Resolve-Path -LiteralPath $HtmlPath).Path
  if (Test-Path -LiteralPath $DocxPath) { Remove-Item -LiteralPath $DocxPath -Force }
  $doc = $word.Documents.Open($html)
  Set-FirstSectionPortrait $doc
  Set-TableLayout $doc
  Restore-CellFills $doc
  Set-PageFooter $doc $FooterPrefix -OfTotal:$OfTotal
  Remove-BodyFooterParas $doc $BareLine
  Assert-CardsStayOnOnePage $doc
  $doc.SaveAs2($DocxPath, 16)
  $doc.Close([ref]$false)
}

function Convert-HtmlToPdf {
  param([string]$HtmlPath, [string]$PdfPath, [string]$FooterPrefix, [string]$BareLine, [switch]$OfTotal)
  $html = (Resolve-Path -LiteralPath $HtmlPath).Path
  if (Test-Path -LiteralPath $PdfPath) { Remove-Item -LiteralPath $PdfPath -Force }
  $doc = $word.Documents.Open($html)
  Set-FirstSectionPortrait $doc
  Set-TableLayout $doc
  Restore-CellFills $doc
  Set-PageFooter $doc $FooterPrefix -OfTotal:$OfTotal
  Remove-BodyFooterParas $doc $BareLine
  $doc.ExportAsFixedFormat($PdfPath, 17)
  $doc.Close([ref]$false)
}

$filledBare = 'Portfolio sample · Before you paste, classify.'
$filledPrefix = "$filledBare ·"
$brandPrefix = "$filledBare · Brand Guideline ROM ·"
$blankBare = '[Company name] · [Project name]'
$blankPrefix = "$blankBare ·"

Convert-HtmlToDocx -HtmlPath $filledHtml -DocxPath $filledDocx -FooterPrefix $filledPrefix -BareLine $filledBare
Convert-HtmlToDocx -HtmlPath $blankHtml -DocxPath $blankDocx -FooterPrefix $blankPrefix -BareLine $blankBare
Convert-HtmlToPdf  -HtmlPath $brandHtml -PdfPath $brandPdf -FooterPrefix $brandPrefix -BareLine $filledBare -OfTotal

$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
Start-Process -FilePath $filledDocx
Get-ChildItem -LiteralPath $root -File | Select-Object Name, Length | Format-Table -AutoSize
