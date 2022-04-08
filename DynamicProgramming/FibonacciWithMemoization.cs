var cache = new KeyValuePair<int, int>();
cache.Add(0, 1);
cache.Add(1, 1);
public int fib(int n){
    if(cache.ContainsKey(n))
        return cache.GetValue(n);

    else{
        var value = fib(n-1) + fib(n-2)
        cache.Add(n, value);
    }
    return fib(n-1) + fib(n-2);
}
