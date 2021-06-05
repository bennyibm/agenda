
export default class Contact{
    fullName : FullName
    phone : string
    gender : string
    email : string
    linkedin : string

    constructor(fullName : FullName, phone : string, gender : string, email : string, linkedin : string){
        this.fullName = fullName
        this.phone = phone
        this.gender = gender
        this.email = email
        this.linkedin = linkedin
    }

    save(){

    }

    delete(){

    }

    static getAll(){

        return this.myList.length
    }

    private static myList : Array<Contact> = []

}

export interface FullName{
    first :string
    last : string
}
