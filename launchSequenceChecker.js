function launchSequenceChecker(systemNames, stepNumbers) {
    hash = {}
    for (i in systemNames) {
        if (hash[systemNames[i]] 
            && hash[systemNames[i]] >= stepNumbers[i]) {
            return false;
        }
        hash[systemNames[i]] = stepNumbers[i];
    }
    return true;
}
