# Portrait actions

Record of what was decided and what is live. Written 2 Oct 2026 so this chat can be deleted. Pictures only. The public site is https://keith-byne-portfolio.vercel.app

## Rules he set

Change only the hair unless he says otherwise. Leave expression, skin tone, glasses, beard, clothes, pose, lighting, and background alone.

His hair is cropped short, close to the scalp, combed forward, with a receding hairline, a high forehead, and temples cut back. Combed-back or wig-like silver caps were rejected.

If he says use his photo, use that file. A generated picture made darker is not his photo.

The lecture-theatre shot stays. He is small in the frame. Do not regenerate the room.

LinkedIn and CV portraits were deleted at his request. Do not restore them.

## What is on the site

| Page | File | What it is |
|------|------|------------|
| Home | `public/portraits/front.jpg` | Healed studio portrait. 224,246 bytes. Same pixels as the About turtleneck. Alt: short white hair, black turtleneck, looking slightly off camera. |
| About, first | `public/portraits/turtleneck.png` | The same healed portrait. |
| About, second | `public/portraits/headshot.png` | His photo, sharpened, in the slot that had held the silk-screen shot. The CV portrait was the wrong replacement. 2 Oct 2026. |
| About, third | `public/portraits/informal.jpg` | His real close-up. Hand at chin, round glasses, short white hair combed forward. 27,966 bytes. |
| About, fourth | `public/portraits/lecture-theatre.png` | Unchanged. From the back of the room. 21 Sep 2026. |

Home and About were pushed. The healed portrait went up in commit `7a02d02`. His photo replaced the generated Cursor shot on About in commit `bb598e6`.

## Source files

- Live healed portrait: `C:\Users\keith\Desktop\front-portrait-skin.jpg` (also the bytes in `front.jpg` and `turtleneck.png`). He corrected the hairline himself, then one pass naturalised only the scar along that hairline.
- His hairline edit, left untouched: `C:\Users\keith\Desktop\front-portrait-attempt.jpg`. Do not overwrite it.
- The informal photo on About is his dark close-up. The Cursor screen was not inserted. The frame is his face and his hand, so a screen would cover him.

## On disk, not on Home or About

- `public/portraits/using-cursor.png` — a generated low-light office shot. He rejected it. About does not use it. Do not put a generated person back in that slot.
- `public/portraits/desk.png` and `public/portraits/profile.png` — not on Home or About.

## What he rejected

Generated hair that was combed back, or that copied an earlier portrait whenever that full portrait was used as a reference. Face-only crops still leaked the old temple hair.

A rebuilt turtleneck that copied the old hair. He took `front-portrait-attempt.jpg` and fixed the hairline himself. The healed skin file is the one he said to use.

The generated darker Cursor picture. He asked for his photo. If a Cursor screen can sit in that photo without covering him, it can be added. It could not. The real photo is what is on About.
