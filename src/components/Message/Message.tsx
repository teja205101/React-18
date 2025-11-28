function Message() {
    const Name = () => "Teja";
    if (Name()){
        return (
     <h1>Welcome back {Name()}!</h1>)
    }
    return <>Hello </>
}

export default Message;
