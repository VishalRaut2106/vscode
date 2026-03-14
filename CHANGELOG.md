# Changelog

## [0.1.0] - 2025-12-24

### Added
- Syntax highlighting for `.toon` files
- File recognition with `.toon` extension
- Language configuration with proper indentation and brackets
- TextMate grammar for TOON syntax
- Basic example file

### Grammar (spec-compliant)
- Array header syntax: `key[N]: v1,v2` and `key[N]{f1,f2}:` tabular headers
- Dotted key support: `user.name: value`
- List item markers: `- value`
- Strings (quoted), numbers, booleans, null values
- No comment syntax (TOON has none per spec)

## [0.0.1] - 2025-12-24

### Added
- Initial project setup with TypeScript and build pipeline
- Basic extension scaffolding
- Development tooling (ESLint, tsdown, pnpm)