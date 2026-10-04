# Copy this project from the PC onto UNITOMNAS.
# The PC is the working copy. The NAS folder is the duplicate.
# node_modules and .next are rebuilt by npm; they are not copied.
$ErrorActionPreference = "Stop"
$src = "C:\Users\keith\European-Corporate-Pivot"
$dst = "\\UNITOMNAS\home\Personal\European-Corporate-Pivot"

if (-not (Test-Path -LiteralPath "\\UNITOMNAS\home\Personal")) {
  throw "UNITOMNAS Personal is not reachable. Check the network, then run this again."
}

New-Item -ItemType Directory -Force -Path $dst | Out-Null

& robocopy $src $dst /E /XO /R:2 /W:5 /XD node_modules .next /XF "~$*" /NFL /NDL /NP
$code = $LASTEXITCODE
if ($code -ge 8) {
  throw "NAS copy failed (robocopy exit $code)."
}
Write-Output "NAS copy is current: $dst"
exit 0
