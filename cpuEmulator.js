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
