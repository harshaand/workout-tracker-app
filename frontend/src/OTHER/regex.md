Regex for replacing var(--xyz) -> $xyz
var\(--([a-zA-Z0-9_-]+)\)
\$$1

then replace / with nothing