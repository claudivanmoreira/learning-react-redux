import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker'
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgor="Today at 4:45PM"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgor="Today at 2:00AM"
                    content="I like the subject"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgor="Yesterday at 5:00PM"
                    content="I like the writer"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))