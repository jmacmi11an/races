import useRefreshTime from "../hooks/useRefreshTime";

const Countdown = ()=> {
    const currentSecond = useRefreshTime(1000)

    return <h3 className='countdown'>{currentSecond.toLocaleTimeString()}</h3>
}

export default Countdown;