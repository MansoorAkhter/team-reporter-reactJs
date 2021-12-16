import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function AllMembers() {
  const allMembers = [
    { label: "Mansoor Akhter", year: 1991 },
    { label: "Inno Sufiyan", year: 1991 },
    { label: "Mohsin Shehzad", year: 1990 },
  ];
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={allMembers}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="All Members" />}
      />
    </div>
  );
}

export default AllMembers;
