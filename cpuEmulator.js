```
MIT License

Copyright (c) 2017 kliques

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

function cpuEmulator(subroutine) {
    i = 0;
    regs = new Uint32Array(43);
    last = 0;
    while (subroutine[i]) {
        comm = subroutine[i].split` `;
        args = comm[1] && comm[1].split`,`   
        if (comm[0] == 'MOV') {
            if (args[0][0] == "R") {
                regs[+args[1].slice(1)] = regs[+args[0].slice(1)];
            } else {
                regs[+args[1].slice(1)] = +args[0];
            }
            i++;
        } else if (comm[0] == 'ADD') {
            regs[+args[0].slice(1)] += regs[+args[1].slice(1)];
            i++;
        } else if (comm[0] == 'INC') {
            ++regs[+args[0].slice(1)];  
            i++;
        } else if (comm[0] == 'DEC') {
            --regs[+args[0].slice(1)];
            i++;
        } else if (comm[0] == 'INV') {
            regs[+args[0].slice(1)] = ~regs[+args[0].slice(1)];
            i++;
        } else if (comm[0] == 'JMP') {
            i = +args[0] - 1;
        } else if (comm[0] == 'JZ') {
            if (regs[0] == 0) {
                i = +args[0] - 1;
            } else {
                i++;
            }
        } else if (comm[0] == 'NOP') {
            i++;
        }
    }
    return regs[42]+"";
}
