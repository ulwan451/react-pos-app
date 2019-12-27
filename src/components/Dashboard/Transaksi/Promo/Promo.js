import React from "react";
import "./Promo.scss";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export default function Promo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Backdrop
        className={classes.backdrop}
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className="ticket">
          <div className="illustration">
            <div className="spikes">
              <div className="spike" />
              <div className="spike" />
              <div className="spike" />
              <div className="spike" />
              <div className="spike" />
              <div className="spike" />
              <div className="spike" />
              <div className="spike" />
              <div className="spike" />
            </div>
            <div className="new-label text-dark">BARU</div>
          </div>
          <div className="ornament">
            <div className="ornament__sharp" />
            <div className="ornament__cut ornament__cut--1" />
            <div className="ornament__cut ornament__cut--2" />
            <div className="ornament__tail" />
            <div className="content">
              <p>
                Selamat! Anda Dapat
                <br />
                Disc. 20% untuk
                <br />
                Transaksi Pertama Anda.
              </p>
              <a href="#." className="link-join">
                Bergabung Sekarang
              </a>
            </div>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}
