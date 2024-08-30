#!/bin/bash

export OLD_PATH=$PATH

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

export PATH=${DIR}/nodejs/bin:${PATH}

deactivate() {
    export PATH=$OLD_PATH
    unset OLD_PATH
    unset -f deactivate
}

echo "Environment activated. Use 'deactivate' to revert."

