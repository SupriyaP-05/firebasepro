import React from "react";

import Firebase from "firebase";
import firebaseConfig from "./firebase";

interface Props {
    name: any;
    role: any;
    uid: any;
    value: any;
    refs: any;
}

class Apps extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);
        Firebase.initializeApp(firebaseConfig);

        this.state = {
            developers: []
        };
    }

    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState !== this.state) {
            this.writeUserData();
        }
    }

    writeUserData = () => {
        Firebase.database()
            .ref("/")
            .set(this.state);
        console.log("DATA SAVED");
    };

    getUserData = () => {
        let ref = Firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    };

    handleSubmit = (event: { preventDefault: () => void; }, state: any) => {
        event.preventDefault();
        let name = state.name.value;
        let role = state.name.role.value;
        let uid = state.name.uid.value;

        if (uid && name && role) {
            const { developers } = this.state;
            const devIndex = developers.findIndex((data: { uid: any; }) => {
                return data.uid === uid;
            });
            developers[devIndex].name = name;
            developers[devIndex].role = role;
            this.setState({ developers });
        } else if (name && role) {
            const uid = new Date().getTime().toString();
            const { developers } = this.state;
            developers.push({ uid, name, role });
            this.setState({ developers });
        }

        state.name.value = "";
        state.name.role.value = "";
        state.name.uid.value = "";
    };

    removeData = (developer: { uid: any; }) => {
        const { developers } = this.state;
        const newState = developers.filter((data: { uid: any; }) => {
            return data.uid !== developer.uid;
        });
        this.setState({ developers: newState });
    };

    updateData = (developer: { uid: any; name: any; role: any; }) => {
        developer.uid.value = developer.uid;
        developer.name.value = developer.name;
        developer.role.value = developer.role;
    };

    render() {
        const { developers } = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1>Firebase Development Team</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            {developers.map((developer: { uid: any; name: any; role: any; }) => (
                                <div
                                    key={developer.uid}
                                    className="card float-left"
                                    style={{ width: "18rem", marginRight: "1rem" }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">{developer.name}</h5>
                                        <p className="card-text">{developer.role}</p>
                                        <button
                                            onClick={() => this.removeData(developer)}
                                            className="btn btn-link"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => this.updateData(developer)}
                                            className="btn btn-link"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <h1>Add new team member here</h1>
                            <form onSubmit={() => this.handleSubmit}>
                                <div className="form-row">
                                    <input type="hidden" ref="uid" />
                                    <div className="form-group col-md-6">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            ref="name"
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Role</label>
                                        <input
                                            type="text"
                                            ref="role"
                                            className="form-control"
                                            placeholder="Role"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <h3>
                                Tutorial{" "}
                                <a href="https://www.educative.io/edpresso/firebase-as-simple-database-to-react-app">
                                    here
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Apps;