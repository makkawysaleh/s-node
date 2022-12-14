// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --trace-wasm-memory --liftoff --no-wasm-tier-up

// Force enable sse3 and sse4-1, since that will determine which execution tier
// we use, and thus the expected output message will differ.
d8.file.execute("test/message/wasm-trace-memory.js");
