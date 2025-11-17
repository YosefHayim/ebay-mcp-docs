# Changelog

All notable changes to the eBay MCP Server project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.2] - 2025-01-16

### Fixed

- **Critical OAuth Fix:** Corrected authorization endpoint from `auth.ebay.com` to `auth2.ebay.com`
- Resolved persistent `unauthorized_client` errors during OAuth flows
- Fixed redirect URI parameter to use RuName identifier format (`YourName-AppName-xxxxx-xxxxxx`)
- Updated all 21 OAuth URL generation tests to validate correct endpoint and `hd` parameter

### Changed

- OAuth 2.0 implementation now requires RuName from eBay Developer Portal
- RuName represents unique application identifier per environment (sandbox vs. production)

### Testing

- All test suites passing (870+ tests)
- OAuth integration validated with corrected endpoints

## [1.4.0] - 2025-01-15

### Changed

- **Documentation Consolidation:** Merged all documentation into single comprehensive README
- Enhanced API coverage documentation showing 99.1% coverage (110/111 endpoints)
- Improved setup and configuration instructions
- Updated feature documentation with current capabilities

### Added

- Comprehensive feature matrix in README
- Enhanced troubleshooting documentation
- Better examples for common use cases

## [1.3.0] - 2025-01-14

### Added

- **Interactive Setup Wizard:** New `npm run setup` command provides guided CLI configuration
- Step-by-step credential setup process
- Automatic validation of credentials
- Environment detection (sandbox vs. production)

### Improved

- Developer experience for first-time setup
- Clearer error messages during configuration
- Better validation feedback

## [1.2.2] - 2025-01-12

### Added

- **eDelivery API Implementation:** 24 new endpoints for international shipping operations
- Complete coverage of eBay's eDelivery API category
- Support for cross-border trade operations
- International shipping management tools

### Testing

- Added comprehensive tests for eDelivery endpoints
- Validated international shipping workflows

## Previous Versions

### [1.1.7] - 2025-11-12

#### Added

- SECURITY.md with comprehensive security documentation
- CODE_OF_CONDUCT.md following Contributor Covenant v2.1
- OAUTH-SETUP.md with detailed OAuth token flow instructions

#### Fixed

- Documentation accuracy: README now shows 140 tools (not 137)
- CLAUDE.md updated to reflect 8 API categories

#### Removed

- GitHub Actions linting workflow (streamlined CI/CD)

### [1.1.4] - 2025-11-12

#### Added

- **33 Native TypeScript Enums** for type-safe development
- MarketplaceId enum with 41 global marketplace values
- Condition enum with 17 product condition values
- 86 new tests for enum validation

#### Changed

- Migrated 23 Zod schemas from string literals to native enum validation
- Enhanced compile-time type safety
- Improved IDE auto-completion

### [1.1.3] - 2025-11-12

#### Added

- Automated MCP client configuration scripts
- `setup-mcp-clients.sh` for multi-client setup
- `mcp-setup.json` centralized credential management

#### Fixed

- Resolved 11 failing marketing API tests
- Fixed response type mismatches
- Improved test reliability

### [1.1.2] - 2025-11-12

#### Changed

- **46% package size reduction** (2.2MB → 1.2MB)
- Optimized `package.json` files array
- Enhanced `.npmignore` configuration
- Excluded development files from distribution

### [1.1.1] - 2025-11-12

#### Fixed

- Corrected GitHub repository URLs in package.json
- Updated documentation links
- Fixed npm package metadata

### [1.1.0] - 2025-11-12

#### Added

- **GitHub Actions CI/CD Pipeline**
- Automated testing across Ubuntu, Windows, and macOS
- Test coverage enforcement (83% line, 91% function, 71% branch)
- Dual package manager support (npm and pnpm)
- Automated dependency updates workflow

### [1.0.0] - 2025-11-12

#### Added

- **Initial Production Release**
- 170+ eBay Sell API tools across 9 categories
- OAuth 2.0/2.1 authentication with automatic token refresh
- Dual transport modes (STDIO and HTTP)
- Client-side rate limiting (5,000 requests/minute)
- 870 tests with 99%+ function coverage
- File-based token persistence
- Two-tier authentication (user tokens and application tokens)
- Support for Claude Desktop, Cursor, and Cline
- Interactive OAuth setup wizard
- Comprehensive documentation

---

## Legend

- `Added` - New features
- `Changed` - Changes in existing functionality
- `Deprecated` - Soon-to-be removed features
- `Removed` - Removed features
- `Fixed` - Bug fixes
- `Security` - Security improvements

## Links

- [Documentation](https://ebaymcp.com)
- [GitHub Releases](https://github.com/YosefHayim/ebay-mcp-server/releases)
- [Source Repository](https://github.com/YosefHayim/ebay-mcp-server)
- [Issue Tracker](https://github.com/YosefHayim/ebay-mcp-server/issues)
