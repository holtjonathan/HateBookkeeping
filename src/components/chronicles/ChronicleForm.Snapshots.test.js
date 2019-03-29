import React from "react";
import ChronicleForm from "./ChronicleForm";
import renderer from "react-test-renderer";
import { chronicles, players } from "../../../tools/mockData";
import { JestEnvironment } from "@jest/environment";
import { exportAllDeclaration } from "@babel/types";

it('sets submit button label "Saving..." when saving is true', () => {
  const tree = renderer.create(
    <ChronicleForm
      chronicle={chronicles[0]}
      players={players}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it('sets submit button label "Save" when saving is false', () => {
  const tree = renderer.create(
    <ChronicleForm
      chronicle={chronicles[0]}
      players={players}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
