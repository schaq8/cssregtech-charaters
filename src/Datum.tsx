import React from "react";

type DatumProps = {
  label: string;
};
export const Datum: React.FC<DatumProps> = ({ label, children }) => (
  <p className="clearfix">
    <span className="float-start text-muted">{label}</span>
    <strong className="font-bold float-end">{children}</strong>
  </p>
);

export default Datum;
