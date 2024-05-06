import React from 'react'
import '../App.css';
import Sidebar from '../component/Sidebar';

const Home = () => {
    return (
        <>
            <div className="body">
                <div>
                    <Sidebar />
                </div>
                <div className='middlePart'>
                    <div className='container'>
                        <div className='Homee'>
                            <div className='row'>
                                <h3>
                                    Home
                                </h3>
                                <br /><br />
                            </div>
                            <div className='row'>
                                <div className='col-4'><div className="card" style={{ width: "18rem;", height: "8rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Started</h5>
                                        <p className="card-text">Read our getting started guide to get the most out of your Capitalmind subscription.</p>
                                    </div>
                                </div></div>
                                <div className='col-4'><div className="card" style={{ width: "18rem;", height: "8rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Community</h5>
                                        <p className="card-text">Join the conversation on our exclusive community on Slack for Capitalmind Premium subscribers.</p>
                                    </div>
                                </div></div>
                                <div className='col-4'><div className="card" style={{ width: "18rem;", height: "8rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Visit Website</h5>
                                        <p className="card-text">Keep up with our latest content on our website.</p>
                                    </div>
                                </div></div>
                            </div>
                        </div><br /><br />
                        <div className='latestPost'>
                            <div className='row'>
                                <h6>Latest Posts</h6>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div class="card">
                                        <div class="card-header">
                                            <span>Apr 18, 2024</span><br/>
                                            <span className='heading'>Sunt nulla commodo consectetur consectetur occaecat do deserunt enim laboris elit.</span>
                                            <p>Proident do ea et nisi eu labore consequat veniam est aute sit officia. Sint et enim consequat ullamco est. Consequat sint qui adipisicing pariatur Lorem. <br/>Read more....</p>
                                            <a href='#' style={{color:"#056341",fontWeight:"bold", textDecoration:"none"}}>Read full post</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="card">
                                        <div class="card-header">
                                            <span>Apr 18, 2024</span><br/>
                                            <span className='heading'>Aliquip mollit eiusmod Lorem cillum cupidatat sunt elit qui.</span>
                                            <p>Proident do ea et nisi eu labore consequat veniam est aute sit officia. Sint et enim consequat ullamco est. Consequat sint qui adipisicing pariatur Lorem. <br/>Read more....</p>
                                            <a href='#' style={{color:"#056341",fontWeight:"bold", textDecoration:"none"}}>Read full post</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-6'>
                                    <div class="card">
                                        <div class="card-header">
                                            <span>Apr 18, 2024</span><br/>
                                            <span className='heading'>Incididunt et velit velit aute incididunt fugiat ut Lorem deserunt laboris.</span>
                                            <p>Proident do ea et nisi eu labore consequat veniam est aute sit officia. Sint et enim consequat ullamco est. Consequat sint qui adipisicing pariatur Lorem. <br/>Read more....</p>
                                            <a href='#' style={{color:"#056341",fontWeight:"bold", textDecoration:"none"}}>Read full post</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="card">
                                        <div class="card-header">
                                            <span>Apr 18, 2024</span><br/>
                                            <span className='heading'>Ipsum pariatur sit cillum anim mollit officia ex qui enim.</span>
                                            <p>Proident do ea et nisi eu labore consequat veniam est aute sit officia. Sint et enim consequat ullamco est. Consequat sint qui adipisicing pariatur Lorem. <br/>Read more....</p>
                                            <a href='#' style={{color:"#056341",fontWeight:"bold", textDecoration:"none"}}>Read full post</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home