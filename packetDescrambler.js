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
function packetDescrambler(seq, fragmentData, n) {
    map = [];
    mess = [];
    max = 0
    for (i in seq) {
        frag = seq[i];
        if (frag > max) max = frag;
        data = fragmentData[i];
        if (!map[frag]) {
            map[frag] = {}
        }
        if (!map[frag][data]) {
            map[frag][data] = 1;
        } else {
            map[frag][data]++;
        }
        if (map[frag][data] > n / 2) {
            mess[frag] = data;
        }
    }
    error = 0
    for (i=0; i < max; i++) {
        if (!mess[i] || i+1 < mess.length && mess[i] == "#") 
            error = 1;
    }
    return error ? "" : mess.join``;
}
