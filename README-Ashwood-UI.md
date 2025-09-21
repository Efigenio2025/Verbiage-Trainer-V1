# Ashwood Gray – Mobile UI Kit

Mobile-first components with consistent sizes (`sm|md|lg`), animations (`fade|slide|scale|pulse`), tones (`neutral|success|warning|info`), 44px+ tap targets, motion-reduce safety, and focus-visible rings.

## Install
```bash
npm i framer-motion lucide-react
# Tailwind must be set up; ensure focus-visible styles
```

## Usage

```tsx
import {
  FlowCover, MetricCard, InlineProgress, CompactWizard,
  IconButton, ToggleChip, SegmentedToolbar, AlertNote
} from "@/components/ui";
```

## Codex Prompt

Use our **Ashwood Gray Mobile UI Kit** from `@/components/ui`.

* Default to `size="md"` and `anim="slide"` unless specified.
* Only use the Ashwood palette; no custom colors.
* For step flows, use `<CompactWizard behavior="wrap" />` when looping is desired.
* Keep tap targets ≥44px and preserve `focus-visible` styling.


## Troubleshooting
- Make sure `globals.css` is imported in `_app.tsx`.
- Ensure `tailwind.config.ts` content paths include `components/ui`.
- If styles don’t apply, restart the dev server and delete the `.next` cache.
