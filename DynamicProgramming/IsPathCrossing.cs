/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.
*/

public bool IsPathCrossing(string path) {
    var current = new int{0,0};
    var dict = new KeyValuePair<int, int>;
    dict.Add(0, 0);

    if(path.isNullOrEmpty || path.Length == 1){
        return false;
    }

    foreach(var c in path){

        if(c == 'N'){
            current[0] += 1; //1,0
        }
        if(c == 'S'){
            current[0] -= 1; // 0, -1   -1, -1
        }
        if(c == 'W'){
            current[1] += 1; // -1, 0
        }
        if(c == 'E'){
            current[1] -= 1; //1,-1
        }

        if(dict.ContainsKey(current[0]) && dict.GetValue(current[0]) == current[1]){
            return true;
        }
        else{
            dict.Add(current[0], current[1])
        }
    }
    return false;
}
