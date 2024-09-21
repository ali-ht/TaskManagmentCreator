import AppBar from "./AppBar"
import AssigneeInput from "./AssigneeInput"
import AttachmentButton from "./AttachmentButton"
import Button from "./Button"
import DeadlineInput from "./DeadlineInput"
import DescriptionInput from "./DescriptionInput"
import TitleInput from "./TitleInput"

function CreatorPage() {
    return (
      <>
        <AppBar />
        <TitleInput />
        <DescriptionInput />
        <DeadlineInput />
        <AssigneeInput />
        <AttachmentButton />
        <Button />
      </>
    )
  }
  
export default CreatorPage