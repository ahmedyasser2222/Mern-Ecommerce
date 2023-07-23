import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  TextField,
} from "@mui/material";

const Filter = () => {
  return (
    <div className="filter">
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <TreeItem nodeId="1" label="Category" className="item-tree">
          <FormGroup className="form-group">
            <FormControlLabel control={<Checkbox />} label="All Products" />
            <FormControlLabel control={<Checkbox />} label="Women's Fashion" />
            <FormControlLabel control={<Checkbox />} label="Men's Fashion" />
            <FormControlLabel control={<Checkbox />} label="Electronics" />
            <FormControlLabel control={<Checkbox />} label="Kids" />
          </FormGroup>
        </TreeItem>

        <TreeItem nodeId="2" label="Brand" className="item-tree">
          <FormGroup className="form-group">
            <FormControlLabel control={<Checkbox />} label="TOMMY HILFIGER" />
            <FormControlLabel control={<Checkbox />} label="FOSSIL" />
            <FormControlLabel control={<Checkbox />} label="DIESEL" />
            <FormControlLabel control={<Checkbox />} label="CASIO" />
            <FormControlLabel control={<Checkbox />} label="Nike" />
          </FormGroup>
        </TreeItem>

        <TreeItem nodeId="3" label="Price(EGP)" className="item-tree">
          <div className="price-filter">
            <TextField
              label="From"
              defaultValue={30}
              size="small"
              type="number"
            />
            <TextField
              label="To"
              defaultValue={30000}
              size="small"
              type="number"
            />
            <Button>go</Button>
          </div>
        </TreeItem>

        <TreeItem nodeId="4" label="Product Rating" className="item-tree">
          <div className="rate-filter">
            
            <Box width={220}>
              <Slider
                size="small"
                defaultValue={2}
                aria-label="Small"
                valueLabelDisplay="auto"
                min={0}
                max={5}
                marks
              />
            </Box>
          </div>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default Filter;
