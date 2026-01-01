# Version 2 Migration Guide

## Summary of Changes

| Component          | Current Slot | Recommended Slot | Reason                             |
| ------------------ | ------------ | ---------------- | ---------------------------------- |
| FloatingLabelInput | `close`      | `closeButton`    | Interactive button element         |
| FloatingLabelInput | `svg`        | `closeIcon`      | Icon within button                 |
| FloatingLabelInput | `combo`      | `comboList`      | More descriptive for list          |
| Input              | `close`      | `closeButton`    | Interactive button element         |
| Input              | `svg`        | `closeIcon`      | Icon within button                 |
| Input              | `combo`      | `comboList`      | More descriptive for list          |
| Input              | `comboItem`  | `option`         | Standard term for selectable items |
| Input              | `div`        | `wrapper`        | More semantic name                 |
| Input              | `left`       | `leftAddon`      | More descriptive for addon         |
| Input              | `right`      | `rightAddon`     | More descriptive for addon         |
