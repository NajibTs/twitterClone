import React, { Component } from "react";
import PropTypes from "prop-types";
export default class GetComments extends Component {
    render() {
        const { id, humanCreatedAt, username, comments } = this.props.comment;
        const user = this.props.post;
        return (
            <div>
                <div className="user">
                    <a href={`/users/${user.username}`}>
                        <b>{username}</b>
                    </a>{" "}
                    {humanCreatedAt}
                </div>
                <div key={id}>{comments}</div>
            </div>
        );
    }
}

GetComments.PropTypes = {
    comment: PropTypes.object .isRequired,
    post: PropTypes.object.isRequired
};
