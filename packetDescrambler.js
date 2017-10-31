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
