class Product
{
    #name
    #id

    constructor(name:String,id:String)
    {
        this.#name = name;
        this.#id  =  id;
    }

    getName():String
    {
        return this.#name
    }

        getId():String
    {
        return this.#id
    }


}