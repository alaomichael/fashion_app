export const updateProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
// const authorId = getState().firebase.auth.uid;
        firestore.collection('projects/' + project.id).update({
            ...project,
             
    name: this.state.name,
    phone: this.state.phone

        }).then(() => {
            dispatch({ type: 'UPDATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_PROJECT_ERROR', err });
        })

    }
};
