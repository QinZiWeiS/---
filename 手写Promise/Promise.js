class myPromise {
    // 构造函数，传进来的函数其实是立马执行，因为promise本身是一个同步执行的函数，只是.then方法根据这里面的resolve和reject状态决定什么时候执行
    constructor(fn) {
        this.status = 'pending';
        this.res = null;
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        this.resolveFnArr = [];
        this.rejectFnArr = [];

        //如果运行传进来的函数中有throw，相对于执行了reject方法
        try {
            //立即执行函数，并且给两个方法可以去改变这个promise的状态
            fn(this.resolve, this.reject);
        } catch (e) {
            this.reject(e)
        }
    }

    resolve(value) {
        //确保状态只能改变一次，永久改变，如果不为执行态，就不能再次改变；
        setTimeout(() => {
            if (this.status !== 'pending') return;
            this.status = 'resolved';
            this.res = value;

            while (this.resolveFnArr.length) {
                this.resolveFnArr.shift()(this.res)
            }
        })
    }

    reject(value) {
        //确保状态只能改变一次，永久改变，如果不为执行态，就不能再次改变；
        setTimeout(() => {
            if (this.status !== 'pending') return;
            this.status = 'rejected';
            this.res = value;

            while (this.rejectFnArr.length) {
                this.rejectFnArr.shift()(this.res)
            }
        })
    }

    then(resolveFn, rejectFn) {
        // 接收两个回调
        // 参数校验，不是函数就转换成函数
        resolveFn = typeof resolveFn === 'function' ? resolveFn : (val) => val;
        rejectFn = typeof rejectFn === 'function' ? rejectFn : (res) => { throw res }
        const self = this;
        return new myPromise((resolve, reject) => {
            let resolved = () => {
                try {
                    const res = resolveFn(self.res);
                    return res instanceof myPromise ? res.then(resolve, reject) : resolve(res)
                } catch (err) {
                    reject(err)
                }
            }

            let rejected = () => {
                try {
                    const res = resolveFn(self.res);
                    return res instanceof myPromise ? res.then(resolve, reject) : reject(res)
                } catch (err) {
                    reject(err)
                }
            }

            if (this.status === 'resolved') {
                // 如果当前为成功状态，执行第一个回调
                resolved(this.res)
            } else if (this.status === 'rejected') {
                // 如果当前为失败状态，执行第二哥回调
                rejected(rejectFn)
            } else {
                //为执行态则先存储这两个回调，等待状态改变了就会调用；
                self.resolveFnArr.push(resolved);
                self.rejectFnArr.push(rejected);
            }

        })
    }
}