# Version 2 Migration Guide

## transition and transitionParams

v2 introduced breaking prop renames
- transitionType → transition 
- params → transitionParams

### Lists affected components 
- Accordion 
- Alert 
- Avatar 
- Banner
- Badge
- Popover
- Toast
- Sidebar
- SidebarDropdownWrapper

## Order of styling 
The component classes has the highest precedence.

Theme provider -> context classes (if exists) -> classes
