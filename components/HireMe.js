import React from 'react'

export default function HireMe({text,title}) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                    <div className="col-6">
                        <form>
                            <input type="text" />
                            <input type="email" />
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <input type="submit" value="submit" />
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
