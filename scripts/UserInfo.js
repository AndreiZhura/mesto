export default class UserInfo {
    constructor(profileName, profileProfession) {
        this._profileName = profileName;
        this._profileProfession = profileProfession;
    }
    getUserInfo() {
        nameInput.value = profileName.textContent;
        jobInput.value = profileProfession.textContent;
    }
    setUserInfo() {
        profileName.textContent = nameInput.value;
        profileProfession.textContent = jobInput.value
    }
}