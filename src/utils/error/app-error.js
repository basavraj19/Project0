class Apperror extends Error{
    constructor(message,statucode)
    {
        super(message);
        this.statucode=statucode;
        this.explaintion =message;
    }
}
module.exports =Apperror;