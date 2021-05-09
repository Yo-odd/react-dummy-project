import React from 'react';
import Card from '../UI/Card'
import Form from '../UI/Form'

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card>
            <Form>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username' className={`${'warm'}`} >
                        User:
            </label>
                    <input type='text' id='username' placeholder='Please enter your name here' ></input>
                    <label htmlFor='age' className={`${'warm'}`} >
                        Age:
            </label>
                    <input type='number' id='age' placeholder='Please enter your age here' ></input>

                    <button type='submit' >Add User</button>
                </form>
            </Form>
        </Card>
    );
};
export default AddUser;