function Message() {
    const Name = () => "Teja";
    if (Name()){
        return (
     <h1>welcome Back {Name()}!</h1>)
    }
    return <>Hello </>
}

export default Message;
