// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber ---------------------------------------------------------------
test('Valid pretty phone number', () => {
    expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('Valid ugly phone number', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('Too short phone number', () => {
  expect(isPhoneNumber("123-456-789")).toBe(false);
});

test('Not phone number', () => {
  expect(isPhoneNumber("apple")).toBe(false);
});

// isEmail ---------------------------------------------------------------------
test('Valid edu email', () => {
  expect(isEmail("dbonkowsky@ucsd.edu")).toBe(true);
});

test('Valid gmail', () => {
  expect(isEmail("danielbonkowsky@gmail.com")).toBe(true);
});

test('Invalid gmail', () => {
  expect(isEmail("danielbonkowsky@gmailcom")).toBe(false);
});

test('Not email', () => {
  expect(isEmail("danielbonkowsky")).toBe(false);
});

// isStrongPassword ------------------------------------------------------------
test("Strong password", () => {
  expect(isStrongPassword("aAAAAA")).toBe(true);
});

test("Strong password 2", () => {
  expect(isStrongPassword("profesorpowell")).toBe(true);
});

test("Weak password", () => {
  expect(isStrongPassword("123456")).toBe(false);
});

test("Weak password 2", () => {
  expect(isStrongPassword("professor_powell")).toBe(false);
});

// isDate ----------------------------------------------------------------------
test("Normal date", () => {
  expect(isDate("01/01/2001")).toBe(true);
});

test("Normal date 2", () => {
  expect(isDate("10/10/1001")).toBe(true);
});

test("Wrong date format", () => {
  expect(isDate("10/10/01")).toBe(false);
});

test("Not a date", () => {
  expect(isDate("apple")).toBe(false);
});

// isHexColor ------------------------------------------------------------------
test("3 digit hex", () => {
  expect(isHexColor("#fc9")).toBe(true);
});

test("6 digit hex", () => {
  expect(isHexColor("#ffcc99")).toBe(true);
});

test("4 digit hex", () => {
  expect(isHexColor("#fc99")).toBe(false);
});

test("Not hex color", () => {
  expect(isHexColor("apple")).toBe(false);
});