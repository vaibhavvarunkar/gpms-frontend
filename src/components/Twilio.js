import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import "../css/Twilio.css"

const Twilio = () => {
    const [msg, setMsg] = useState("")

    const hitTwilio = async (e) => {
        e.preventDefault()
        const body = {
            message: msg
        }
        const res = await axios.post("http://localhost:5000/api/user/twilio", body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        console.log(res);
        setMsg("")
        alert(res.data.body)
    }
    return (
        <div className="twilio">
            <h1>Twilio</h1>
            <br></br>
            <form>
                <textarea placeholder="Write Your Message" value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
                <br></br>
                <Button variant="primary" type="submit" onClick={(e) => hitTwilio(e)}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Twilio
