# FeatureShowcase Scroll Issue — Diagnosis & Fix

## Problem

The sticky scroll section in `src/Components/FeatureShowcase/` does not work. The content does not change as the user scrolls, and the sticky behavior fails entirely.

## Root Cause

`overflow-hidden` on the parent `<section>` in `FeatureShowcase.jsx` (line 9) breaks `position: sticky` on descendant elements.

```
<section className="relative overflow-hidden py-24">   ← THIS IS THE PROBLEM
  <div className="mx-auto max-w-330 px-3">
    <div className="mt-24">
      <StickyLayout />   ← sticky top-0 never sticks
    </div>
  </div>
</section>
```

**Why:** CSS `position: sticky` is broken by `overflow: hidden`, `overflow: scroll`, or `overflow: auto` on **any** ancestor. The sticky element scrolls normally as if it were `position: relative`.

`StickyLayout.jsx` relies on:
- `sticky top-0` on the inner wrapper (line 61)
- `useScroll()` targeting the 500vh container (line 21-24)
- `useMotionValueEvent` mapping scroll progress to `activeIndex` (line 41-47)

None of this works if the sticky element never sticks.

## Fix

**File:** `src/Components/FeatureShowcase/FeatureShowcase.jsx`, line 9

Change:

```jsx
<section className="relative overflow-hidden py-24">
```

To:

```jsx
<section className="relative py-24">
```

The `overflow-hidden` was there to clip the background grid and glow effects. Without it, those elements will extend beyond the section boundary, but since they use `absolute inset-0 -z-10`, they are already contained by the section's relative positioning and do not cause layout issues. The grid lines are purely decorative and won't create scrollbars.

If horizontal overflow does appear after the fix, use `overflow-x-hidden` on `<html>` or `<body>` instead — but test that it doesn't re-break sticky on any browser.

## Verification

After applying the fix:

1. `npm run dev`
2. Scroll to the FeatureShowcase section
3. The left content and right dashboard preview should change as you scroll through 5 sections
4. The numbered progress indicator on the left should highlight the active step

## Files Involved

| File | Role |
|---|---|
| `src/Components/FeatureShowcase/FeatureShowcase.jsx` | Parent section — has the `overflow-hidden` bug |
| `src/Components/FeatureShowcase/StickyLayout.jsx` | Sticky scroll container — uses `useScroll` + `sticky top-0` |
| `src/Components/FeatureShowcase/FeatureContent.jsx` | Left-side content — animates on `activeIndex` change |
| `src/Components/FeatureShowcase/DashboardPreview.jsx` | Right-side dashboard card — animates on feature change |
| `src/Components/FeatureShowcase/featureData.js` | Data for 5 features |
