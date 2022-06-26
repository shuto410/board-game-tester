import {
  AppBar,
  Box,
  Button,
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { Container } from "./components/Container";
import { CustomDragLayer } from "./components/CustomDragLayer";
import { Item, ItemType } from "./components/model";
import Menu from "@mui/icons-material/Menu";
import Storage from "@mui/icons-material/Storage";
import CropPortrait from "@mui/icons-material/CropPortrait";
import CropFree from "@mui/icons-material/CropFree";
import { initialData } from "./initial-data";
import { useDispatch } from "react-redux";
import { addItem as addItemSlice } from "./store/items";

function App() {
  const dispatch = useDispatch();
  const [itemId, setItemId] = useState<number>(initialData.length);
  const buttons: AddButton[] = [
    {
      icon: <CropPortrait />,
      name: "Add Card",
      type: "CARD",
    },
    {
      icon: <Storage />,
      name: "Add Deck",
      type: "DECK",
    },
    {
      icon: <CropFree />,
      name: "Add Card Place",
      type: "CARD_PLACE",
    },
  ];

  const addItem = (type: ItemType) => {
    const item: Item = {
      id: itemId,
      top: 0,
      left: 0,
      type: type,
      contents: {
        title: "Card Title",
        imageUrl: "https://picsum.photos/seed/" + itemId + "/200/300",
        description: "description",
      },
    };

    dispatch(addItemSlice(item));
    setItemId(itemId + 1);
  };

  const renderAppBar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  const renderButtons = () => {
    return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {buttons.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => addItem(action.type)}
          />
        ))}
      </SpeedDial>
    );
  };

  return (
    <div className="App">
      {renderAppBar()}
      <DndProvider backend={TouchBackend}>
        <Container />
        <CustomDragLayer />
      </DndProvider>
      {renderButtons()}
    </div>
  );
}

interface AddButton {
  icon: JSX.Element;
  name: string;
  type: ItemType;
}

export default App;
