import { Tabs, Button, Input, Checkbox, TimePicker, DatePicker } from "antd";
import "antd/dist/antd.css";
import ServerRequestDatePicker from "../../Components/Calender";
import AllMembers from "../../Components/AllMembers";
import "./style.scss";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function onChange(time, timeString) {
  console.log(time, timeString);
}

function CardsComp() {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Reports" key="1">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "25px",
              justifyContent: "space-around",
            }}
          >
            <AllMembers />
            <ServerRequestDatePicker />
          </div>
          <div>
            <h3>Mansoor Akhter: 29th Nov</h3>
            <p>Q. What did you do today?</p>
            <p>A. Nothing</p>
            <p>Q. What will you do tomorrow?</p>
            <p>A. Nothing</p>
            <p>Q. What will you do tomorrow?</p>
            <p>A. Nothing</p>
          </div>
          <div>
            <h3>Sufiyan: 29th Nov | Not submitted yet</h3>
            <p>Q. What did you do today?</p>
            <p>A. </p>
            <p>Q. What will you do tomorrow?</p>
            <p>A.</p>
            <p>Q. What will you do tomorrow?</p>
            <p>A. </p>
          </div>
        </TabPane>

        <TabPane tab="Settings" key="2">
          <h3>Questions:</h3>
          <div>
            <Input type="text" className="questionsFields" />
            <Input type="text" className="questionsFields" />
            <Input type="text" className="questionsFields" />
          </div>
          <h3>Reminder Time:</h3>
          <div className="reminder">
            <TimePicker use12Hours format="h:mm a" onChange={onChange}>
              <input type="time" name="time" id="time" />
            </TimePicker>

            <Checkbox className="Exc">Exclude Weekends</Checkbox>
          </div>
          <h3>Members:</h3>
          <DatePicker>
            <input type="date" name="date" id="date" />
          </DatePicker>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default CardsComp;
