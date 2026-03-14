# TOON Extension Docs

Basic documentation for the TOON VS Code extension.

## Quick Reference

- **File extension**: `.toon`
- **Format**: Indentation-based like YAML, tabular arrays like CSV
- **Arrays**: `key[N]: v1,v2,v3` or tabular `key[N]{f1,f2}:`
- **Dotted keys**: `user.name: value`

## Example

```toon
name: Example
user.role: admin
items[3]: a,b,c
rows[2]{id,name}:
  1,Alice
  2,Bob
```
