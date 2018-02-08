export class UserCertificate{
    userName:String;
    userPercentage:number;
    userCertificateName:String;
    userSubmittedResponse:any;
    //correctResponse:any;

    getUserName():String{
        return this.userName;
    }

    setUserName(userName:String){
        this.userName=userName;
    }

    getUserPercentage():number{
        return this.userPercentage;
    }

    setUserPercentage(userPercentage:number){
        this.userPercentage=userPercentage;
    }

    getUserCertificateName():String{
        return this.userCertificateName;
    }

    setUserCertificateName(userCertificateName:String){
        this.userCertificateName=userCertificateName;
    }

    getUserSubmittedResponse():any{
        return this.userSubmittedResponse;
    }

    setUserSubmittedResponse(setUserSubmittedResponse:any){
        this.userSubmittedResponse=setUserSubmittedResponse;
    }

    // getCorrectresponse():any{
    //     return this.correctResponse;
    // }

    // setCorrectResponse(correctResponse:any){
    //     this.correctResponse=correctResponse;
    // }
}