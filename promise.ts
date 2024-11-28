/*
* promise is a JavaScript object for asynchronous operation. it return a value in the future result of an asynchronous operation
* state: pending -> fulfilled or rejected
* resolve(value) -> fulfilled
* reject(error) -> rejected
* */

const isReady = true;
const isCart = true;
console.log('Start');

const addToCart = (ready: boolean) => {
    // @ts-ignore
    return new Promise((resolve: (arg0: string) => void, reject: (arg0: string) => void) => {
        setTimeout(() => {
            if (ready) {
                resolve('Product added to cart');
            } else {
                reject('Product not added to cart');
            }
        }, 200);
    });
}

const purchase = (cart: boolean) => {
    // @ts-ignore
    return new Promise((resolve: (arg0: string) => void, reject: (arg0: string) => void) => {
        setTimeout(() => {
            if (cart) {
                resolve('Product purchased');
            } else {
                reject('Product not purchased');
            }
        }, 200);
    });
}

const success = (message: string) => {
    // @ts-ignore
    return new Promise((resolve: (arg0: string) => void) => {
        setTimeout(() => {
            resolve(message);
        }, 200);
    });
}

addToCart(isReady)
    .then(() => purchase(isCart))
    .then(() => success('Order Success'))
    .then((message: string) => {
        console.log(message);
    })
    .catch((error: any) => {
        console.log(error)
    });

