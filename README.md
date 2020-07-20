# README

## Prerequisites

Before you can run the script you will need to install Deno.

Homebrew (Mac):

`brew install deno`

Shell (Mac, Linux):

`curl -fsSL https://deno.land/x/install/install.sh | sh`

PowerShell (Windows):

`iwr https://deno.land/x/install/install.ps1 -useb | iex`

Chocolatey (Windows):

`choco install deno`

Scoop (Windows):

`scoop install deno`

Build and install from source using Cargo

`cargo install deno`

(taken from the [Deno installation page](https://deno.land/#installation))


## Running

You can run with the following command:

```
deno run cli.ts 9 8 7 6 5 4 3 2 1
```
or with the script:
```
./go.sh 9 8 7 6 5 4 3 2 1
```
in both cases, tasks are represented by space seperated numbers.


## Tests

You can run tests with the following command:

```
deno test
```
