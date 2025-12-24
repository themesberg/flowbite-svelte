
```sh
git fetch origin --tags
pnpm ch 
pnpm cv 
pnpm lib-helpers 
pnpm cp 
git add . 
git commit --message 'v1.x.x' 
git push origin main
git push origin --tags
At https://github.com/themesberg/flowbite-svelte/releases publish a new version
```

## Checking tags
Always use version sorting when checking tags

```sh
git tag --list | sort -V | tail -n 20
```

## Alias
Check if this works:
```sh
git tags | tail -n 20
```
If not create an alias:
```sh
git config --global alias.tags '!git tag -l | sort -V'
```