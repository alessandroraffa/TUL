# TUL - TUL Utility Library

![TUL logo](TUL-logo.png)

TUL (TUL Utility Library) is a multi-language utility library aimed at simplifying and enhancing software development. Rooted in practicality, it initially launches with a TypeScript foundation, complemented by a Command Line Interface (CLI). This establishes a versatile framework for future expansions across diverse programming languages, catering to the evolving demands of the developer community.

The library's name, TUL, evokes dual imagery. It's a nod to the practicality and indispensability of a "tool" in any developer's arsenal, designed to streamline tasks and boost efficiency. Simultaneously, it draws an analogy to a "tulip," symbolizing growth, simplicity, and natural beauty. This reflects TUL's commitment to fostering innovation and ease within the developer's environment, much like a tulip enriching a garden.

## Motivation

TUL’s inception is a response to a common developer dilemma: the repetitive use of multiple libraries or rewriting similar code snippets. Its roots trace back to a JavaScript object library project from 2005, evolving through years of refining utility functions and code snippets. TUL represents a natural progression of these ideas, aiming to simplify the coding process.

## Multi-Language Utility Structure

TUL (TUL Utility Library), initially implemented in TypeScript, aims to enhance software development by becoming a versatile, multi-language utility library. Plans are in place to extend TUL to Python, Java, C++, PHP, and other languages. Its community-driven approach is designed to foster adaptability and utility across different programming environments.

### Features Organization

TUL organizes its features into a clear, four-tiered hierarchy to ensure a logical, scalable, and user-friendly interface:

- **Category**: The broadest level, encompassing a wide range of functionalities.
- **Subcategory**: A more detailed division within each category, focusing on specific areas.
- **Functionality**: Concentrates on individual functionalities within a subcategory, highlighting their specific applications.
- **Feature**: The most detailed level, describing each specific feature or tool.

This hierarchical structure ensures easy navigation and scalability, vital for the library's growth. TUL seamlessly integrates with a language's native features, providing proxies or enhancements where necessary, thus complementing rather than duplicating existing functionalities. This approach invites open-source contributions, as contributors can easily identify areas for development.

## TUL's Features Tree

To illustrate TUL's structure, the following tree diagram is proposed. It simplifies the understanding of the library's capabilities for both users and developers, ensuring ease of navigation and the identification of areas for future development. The tree diagram is organized as follows:

```
Category
└── Subcategory: Description of Subcategory
    └── Functionality: 
        └── Feature
```

This framework lays the foundation for TUL's organization, facilitating its evolution as a comprehensive, multi-language utility library.

### Utility

```
Utility
├── String Generation: Methods to generate strings and text placeholders
│   ├── Random String
│   │   └── ...
│   ├── Placeholder Text
│   │   ├── Lorem Ipsum
│   │   ├── NovaIpsum
│   │   └── ...
├── String Manipulation: Tools for editing and transforming strings
│   ├── Case Manipulation
│   │   ├── Lower Case
│   │   ├── Upper Case
│   │   ├── Inverted Case
│   │   ├── Capitalized Case: Title Case, Sentence Case, Start Case, Proper Case
│   │   └── Camel Case: Pascal Case, Snake Case, Kebab Case, Train Case, Cobol Case, Macro Case
│   ├── Text Manipulation
│   │   ├── Text Length: Character Count, Word Count, Sentence Count, Paragraph Count
│   │   └── Text Extraction: Extract Text, Extract Words, Extract Sentences, Extract Paragraphs
│   ├── String Transformation
│   │   ├── Reversal
│   │   ├── Shuffling
│   │   ├── Sorting
│   │   ├── Filtering
│   │   ├── Trimming
│   │   ├── Wrapping
│   │   └── Encoding
│   ├── String Formatting
│   │   ├── Template String Interpolation
│   │   └── String Padding
│   └── Advanced String Operations
│       ├── Matching
│       ├── Replacement
│       ├── Splitting
│       ├── Joining
│       ├── Insertion
│       ├── Deletion
│       ├── Substring
│       ├── Subsequence
│       ├── Unicode Normalization
│       ├── Unicode Conversion
│       └── Levenshtein Distance
├── Data Validation
│   ├── Format Validation
│   │   ├── Email Address
│   │   ├── URI
│   │   ├── URL
│   │   ├── IP Address
│   │   ├── MAC Address
│   │   ├── Credit Card Number
│   │   ├── IBAN
│   │   ├── ISBN
│   │   └── ...
│   └── Custom Validation
│       ├── Regular Expression
│       ├── Custom Function
│       ├── Customizable Validation Schema
│       └── Rule-Based Data Validation
├── Data Conversion
│   └── ...
├── Date and Time Utilities
│   └── ...
├── Array and Object Manipulation
│   └── ...
├── Mathematical Utilities
│   └── ...
└── Geographical Utilities
    └── ...
```

### Security


```
Security
├── Encryption & Decryption
│   ├── Cryptographic Encryption
│   │   ├── Symmetric Encryption: AES, DES, 3DES, Blowfish, Twofish, Serpent, Camellia, ...
│   │   └── Asymmetric Encryption: RSA, DSA, ECDSA, ElGamal, Diffie-Hellman, ...
│   └── File Encryption
│       └── ...
├── Hashing Functions
│   ├── Cryptographic Hashing: SHA-1, SHA-2, SHA-3, MD5 (for legacy purposes), ...
│   └── Password Hashing: Argon2, Bcrypt, Scrypt, ...
├── Secure Token Generation
│   └── ...
├── Data Sanitization
│   ├── Input Validation
│   │   ├── XSS Prevention
│   │   └── SQL Injection Prevention
│   └── Content Handling
│       └── Safe User-Generated Content Processing
├── Data Anonymization
│   ├── Data Masking
│   │   ├── Full Masking
│   │   ├── Partial Masking
│   │   ├── Random Masking
│   │   ├── Custom Masking
│   │   └── Masking of Structured Data
│   └── Data Pseudonymization
│       └── ...
└── Cryptography Utilities
    └── Digital Signatures
        └── ...
```

### Performance

```
Performance
├── Caching Mechanisms
│   ├── In-Memory Caching
│   │   ├── Key-Value Pair Caching
│   │   └── Time-Based Cache Expiration
│   ├── Distributed Caching
│   │   └── Integration with Systems like Redis
│   └── Persistent Caching
│       └── ...
├── Asynchronous Processing
│   ├── Async Utilities
│   │   ├── Async/Await
│   │   ├── Promises
│   │   └── Callbacks
│   └── Parallel Processing
│       ├── Multi-Threading
│       ├── Multi-Processing
│       └── Distributed Processing
└── Data Streaming
    └── ...
```

### Processing

```
Processing
├── Task Management
│   ├── Task Scheduling
│   ├── Task Queuing
│   └── Task Prioritization
└── ...
```

## Best Practices and Standards

- **Unit/Integration/End-to-End Testing**: TUL emphasizes automatic testing at all stages of development, ensuring robustness and reliability.
- **Semantic Versioning**: We adopt semantic versioning to maintain clarity and predictability in version updates.
- **CI/CD Pipelines**: Continuous integration and deployment are integral to TUL, facilitating efficient and less error-prone releases.
- **Code Quality and Readability**: We prioritize clear, well-documented code to enhance maintainability and collaboration.
- **Performance**: Focus on optimizing performance to ensure TUL’s functionalities are efficient and effective.
- **Security**: Security practices are adopted in the development process, safeguarding against vulnerabilities.

## Structure of the Repository

This monorepo is organized as follows:

- `ts-tul/`: The TypeScript implementation of TUL, also available as a CLI tool.
- Future language implementations will be structured in similar named directories (e.g., `py-tul/` for Python) for consistency and ease of navigation.

## Contributing

Your involvement is crucial to the growth and success of TUL. We highly value your contributions, whether they be in the form of code enhancements, refining documentation, identifying and reporting bugs, or proposing new features. For specific details on how to contribute, please refer to the `CONTRIBUTING.md` file located within each language-specific implementation. Your expertise and active participation are what drive TUL's continuous evolution, and we deeply appreciate your efforts in making TUL a robust and versatile tool.

## Documentation

The [documentation for TUL](https://github.com/alessandroraffa/TUL/wiki) is hosted on a dedicated GitHub Wiki, offering users an accessible and comprehensive resource for all relevant information.

For language-specific implementations of TUL, tailored documentation is provided to cater to the unique aspects of each language. For instance, the [TUL TypeScript and CLI Documentation](https://github.com/alessandroraffa/TUL/tree/main/ts-tul/docs/README.md) can be found in the implementation subdirectory. This ensures users working with different languages can easily find detailed and relevant guidance specific to their needs.

## License

TUL is released under the [MIT License](LICENSE). This open-source license ensures that you can use, modify, and distribute the library freely.

## Acknowledgements

Special thanks to all contributors who have dedicated their time and expertise to enhance TUL. Your contributions are immensely appreciated and are a significant part of our journey.

## Projects Using TUL

This section showcases projects that utilize the TUL library. If you're using TUL in your project and would like to be featured here, please submit a pull request with your project details.

We love to see the community finding ways to use TUL, and we're excited to showcase your work!

## Contact

For any queries or suggestions regarding TUL, feel free to reach out:

- GitHub: [TUL Issues](https://github.com/alessandroraffa/TUL/issues)
- LinkedIn: [Alessandro Raffa](https://www.linkedin.com/in/alessandroraffa79/)
- X / Twitter: [@alessandroraffa](https://twitter.com/alessandroraffa)
