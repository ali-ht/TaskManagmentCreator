import AppBar from "./AppBar"
import AssigneeInput from "./AssigneeInput"
import AttachmentButton from "./AttachmentButton"
import EndButtons from "./EndButtons";
import DeadlineInput from "./DeadlineInput";
import DescriptionInput from "./DescriptionInput";
import TitleInput from "./TitleInput";

function CreatorPage() {
  return (
    <>
      <AppBar />
      <TitleInput />
      <DescriptionInput />
      <DeadlineInput />
      <AssigneeInput />
      <AttachmentButton />
      <div
        style={{
          padding: '8px 12px',
          backgroundColor: 'white',
          borderTop: '1px solid #ddd',
          position: 'sticky',
          bottom: 0,
        }}>
        <EndButtons
          title="ذخیره و انتشار"
          disable={false}
          // Add to EndButtons onClick={submit}
        />
      </div>
    </>
  );
}
  
export default CreatorPage