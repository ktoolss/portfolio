kristiansmith@kristians-Air server % brew install node
==> Downloading https://ghcr.io/v2/homebrew/core/brotli/manifests/1.0.9
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/brotli/blobs/sha256:a382d95787cc2a5742a1d713f939bbc91ca6e097aee7f49f95cc111dca9fa9d7
==> Downloading from https://pkg-containers-az.githubusercontent.com/ghcr1/blobs/sha256:a382d95787cc2a5742a1d713f939bbc91ca6e097aee7f49f95cc111dca9fa9d
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/c-ares/manifests/1.17.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/c-ares/blobs/sha256:3fc1e6a9c560039998b288db7dfb268c87db614841a6fa1048880b8b6bdd6e4c
==> Downloading from https://pkg-containers-az.githubusercontent.com/ghcr1/blobs/sha256:3fc1e6a9c560039998b288db7dfb268c87db614841a6fa1048880b8b6bdd6e4
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/icu4c/manifests/68.2
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/icu4c/blobs/sha256:fdc2f15705175478dc16607f2d457c0667758e2580beefd67d4d33feed7f5af7
==> Downloading from https://pkg-containers-az.githubusercontent.com/ghcr1/blobs/sha256:fdc2f15705175478dc16607f2d457c0667758e2580beefd67d4d33feed7f5af
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libuv/manifests/1.41.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libuv/blobs/sha256:fec3670ca2dcbe641c1351c806fa3f66f7e7054dc4d42c683d80c0dcfddf0131
==> Downloading from https://pkg-containers-az.githubusercontent.com/ghcr1/blobs/sha256:fec3670ca2dcbe641c1351c806fa3f66f7e7054dc4d42c683d80c0dcfddf013
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/jemalloc/manifests/5.2.1_1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/jemalloc/blobs/sha256:b1b211e5bead798c236d478dd74310a97a7b59470f607b608c07222648b08bf5
==> Downloading from https://pkg-containers-az.githubusercontent.com/ghcr1/blobs/sha256:b1b211e5bead798c236d478dd74310a97a7b59470f607b608c07222648b08bf
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libev/manifests/4.33
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libev/blobs/sha256:e5481e2ba48282bffb5ecc059f0ddddd9807400593e849ed4b48b1fed3a14698
==> Downloading from https://pkg-containers-az.githubusercontent.com/ghcr1/blobs/sha256:e5481e2ba48282bffb5ecc059f0ddddd9807400593e849ed4b48b1fed3a1469
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/manifests/1.1.1k
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/blobs/sha256:cb610ecdda346011031b890d7b7c6e1942d7fc08cf083b74f148ec7ffed8c7e1
==> Downloading from https://pkg-containers-az.githubusercontent.com/ghcr1/blobs/sha256:cb610ecdda346011031b890d7b7c6e1942d7fc08cf083b74f148ec7ffed8c7e
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/nghttp2/manifests/1.43.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/nghttp2/blobs/sha256:5db5819e321f04b2301165cc267913ceacb161faa0504f4e067e074a101871b8
==> Downloading from https://pkg-containers-az.githubusercontent.com/ghcr1/blobs/sha256:5db5819e321f04b2301165cc267913ceacb161faa0504f4e067e074a101871b
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/node/manifests/16.0.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/node/blobs/sha256:2ecf00685d3b91c44f117c78d36884114e426ec6334faf3b2a34325b30926818
==> Downloading from https://pkg-containers-az.githubusercontent.com/ghcr1/blobs/sha256:2ecf00685d3b91c44f117c78d36884114e426ec6334faf3b2a34325b3092681
######################################################################## 100.0%
==> Installing dependencies for node: brotli, c-ares, icu4c, libuv, jemalloc, libev, openssl@1.1 and nghttp2
==> Installing node dependency: brotli
==> Pouring brotli--1.0.9.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/brotli/1.0.9: 25 files, 2.3MB
==> Installing node dependency: c-ares
==> Pouring c-ares--1.17.1.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/c-ares/1.17.1: 85 files, 672.5KB
==> Installing node dependency: icu4c
==> Pouring icu4c--68.2.catalina.bottle.tar.gz
==> Caveats
icu4c is keg-only, which means it was not symlinked into /usr/local,
because macOS provides libicucore.dylib (but nothing else).

If you need to have icu4c first in your PATH, run:
  echo 'export PATH="/usr/local/opt/icu4c/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/usr/local/opt/icu4c/sbin:$PATH"' >> ~/.zshrc

For compilers to find icu4c you may need to set:
  export LDFLAGS="-L/usr/local/opt/icu4c/lib"
  export CPPFLAGS="-I/usr/local/opt/icu4c/include"

==> Summary
🍺  /usr/local/Cellar/icu4c/68.2: 259 files, 72.5MB
==> Installing node dependency: libuv
==> Pouring libuv--1.41.0.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/libuv/1.41.0: 49 files, 3.1MB
==> Installing node dependency: jemalloc
==> Pouring jemalloc--5.2.1_1.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/jemalloc/5.2.1_1: 16 files, 2MB
==> Installing node dependency: libev
==> Pouring libev--4.33.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/libev/4.33: 12 files, 454.9KB
==> Installing node dependency: openssl@1.1
==> Pouring openssl@1.1--1.1.1k.catalina.bottle.tar.gz
==> Regenerating CA certificate bundle from keychain, this may take a while...
==> Caveats
A CA file has been bootstrapped using certificates from the system
keychain. To add additional certificates, place .pem files in
  /usr/local/etc/openssl@1.1/certs

and run
  /usr/local/opt/openssl@1.1/bin/c_rehash

openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
because macOS provides LibreSSL.

If you need to have openssl@1.1 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

For compilers to find openssl@1.1 you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"

==> Summary
🍺  /usr/local/Cellar/openssl@1.1/1.1.1k: 8,071 files, 18.5MB
==> Installing node dependency: nghttp2
==> Pouring nghttp2--1.43.0.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/nghttp2/1.43.0: 24 files, 2.8MB
==> Installing node
==> Pouring node--16.0.0.catalina.bottle.tar.gz
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
Could not symlink bin/node
Target /usr/local/bin/node
already exists. You may want to remove it:
  rm '/usr/local/bin/node'

To force the link and overwrite all conflicting files:
  brew link --overwrite node

To list all files that would be deleted:
  brew link --overwrite --dry-run node

Possible conflicting files are:
/usr/local/bin/node
/usr/local/include/node/common.gypi
/usr/local/include/node/config.gypi
/usr/local/include/node/cppgc/common.h
/usr/local/include/node/js_native_api.h
/usr/local/include/node/js_native_api_types.h
/usr/local/include/node/node.h
/usr/local/include/node/node_api.h
/usr/local/include/node/node_api_types.h
/usr/local/include/node/node_buffer.h
/usr/local/include/node/node_object_wrap.h
/usr/local/include/node/node_version.h
/usr/local/include/node/v8-internal.h
/usr/local/include/node/v8-platform.h
/usr/local/include/node/v8-profiler.h
/usr/local/include/node/v8-version.h
/usr/local/include/node/v8.h
/usr/local/include/node/v8config.h
/usr/local/share/doc/node/gdbinit
/usr/local/share/doc/node/lldb_commands.py
/usr/local/share/man/man1/node.1
/usr/local/share/systemtap/tapset/node.stp
/usr/local/lib/dtrace/node.d
Warning: The post-install step did not complete successfully
You can try again using:
  brew postinstall node
==> Summary
🍺  /usr/local/Cellar/node/16.0.0: 2,769 files, 48.9MB
==> Caveats
==> icu4c
icu4c is keg-only, which means it was not symlinked into /usr/local,
because macOS provides libicucore.dylib (but nothing else).

If you need to have icu4c first in your PATH, run:
  echo 'export PATH="/usr/local/opt/icu4c/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/usr/local/opt/icu4c/sbin:$PATH"' >> ~/.zshrc

For compilers to find icu4c you may need to set:
  export LDFLAGS="-L/usr/local/opt/icu4c/lib"
  export CPPFLAGS="-I/usr/local/opt/icu4c/include"

==> openssl@1.1
A CA file has been bootstrapped using certificates from the system
keychain. To add additional certificates, place .pem files in
  /usr/local/etc/openssl@1.1/certs

and run
  /usr/local/opt/openssl@1.1/bin/c_rehash

openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
because macOS provides LibreSSL.

If you need to have openssl@1.1 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

For compilers to find openssl@1.1 you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"

kristiansmith@kristians-Air server % brew postinstall node
==> Postinstalling node
Warning: The post-install step did not complete successfully
You can try again using:
  brew postinstall node
kristiansmith@kristians-Air server % brew install mongo
==> Tapping homebrew/cask
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask'...
remote: Enumerating objects: 566531, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 566531 (delta 4), reused 10 (delta 4), pack-reused 566521
Receiving objects: 100% (566531/566531), 250.00 MiB | 26.74 MiB/s, done.
Resolving deltas: 100% (400055/400055), done.
Tapped 3899 casks (4,015 files, 268.2MB).
==> Searching for similarly named formulae...
These similarly named formulae were found:
mongo-c-driver                        mongo-cxx-driver                      mongo-orchestration                   mongoose
To install one of them, run (for example):
  brew install mongo-c-driver
Error: No available formula or cask with the name "mongo".
==> Searching for a previously deleted formula (in the last month)...
Error: No previously deleted formula found.
==> Searching taps on GitHub...
Error: No formulae found in taps.
kristiansmith@kristians-Air server % mongod
zsh: command not found: mongod
kristiansmith@kristians-Air server % 