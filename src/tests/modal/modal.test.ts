import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import BasicModal from "./basic-modal.test.svelte";
import TitleModal from "./title-modal.test.svelte";
import SizeModal from "./size-modal.test.svelte";
import DismissableModal from "./dismissable-modal.test.svelte";
import PermanentModal from "./permanent-modal.test.svelte";
import FooterModal from "./footer-modal.test.svelte";
import FullscreenModal from "./fullscreen-modal.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Modal - Basic", () => {
  test("modal is initially closed", () => {
    render(BasicModal);
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  test("opens modal when triggered", async () => {
    const user = userEvent.setup();
    render(BasicModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });
  });

  test("closes modal with close button", async () => {
    const user = userEvent.setup();
    render(BasicModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });

    const closeButton = screen.getByLabelText("Close");
    await user.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    });
  });
});

describe("Modal - Title", () => {
  test("renders modal with title", async () => {
    const user = userEvent.setup();
    render(TitleModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Modal Title")).toBeInTheDocument();
    });
  });

  test("title modal has close button", async () => {
    const user = userEvent.setup();
    render(TitleModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      const closeButton = screen.getByLabelText("Close");
      expect(closeButton).toBeInTheDocument();
    });
  });
});

describe("Modal - Sizes", () => {
  test("renders small modal", async () => {
    const user = userEvent.setup();
    render(SizeModal);

    const trigger = screen.getByText("Open Small Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Small Modal")).toBeInTheDocument();
    });
  });

  test("renders large modal", async () => {
    const user = userEvent.setup();
    render(SizeModal);

    const trigger = screen.getByText("Open Large Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Large Modal")).toBeInTheDocument();
    });
  });
});

describe("Modal - Dismissable", () => {
  test("dismissable modal has close button", async () => {
    const user = userEvent.setup();
    render(DismissableModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Dismissable Modal")).toBeInTheDocument();
    });

    const closeButton = screen.getByLabelText("Close");
    expect(closeButton).toBeInTheDocument();
  });

  test("dismissable modal can be closed with close button", async () => {
    const user = userEvent.setup();
    render(DismissableModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Dismissable Modal")).toBeInTheDocument();
    });

    const closeButton = screen.getByLabelText("Close");
    await user.click(closeButton);

    await waitFor(
      () => {
        expect(screen.queryByText("Dismissable Modal")).not.toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});

describe("Modal - Permanent", () => {
  test("permanent modal opens when triggered", async () => {
    const user = userEvent.setup();
    render(PermanentModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Permanent Modal")).toBeInTheDocument();
    });
  });

  test("permanent modal does not have close button", async () => {
    const user = userEvent.setup();
    render(PermanentModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Permanent Modal")).toBeInTheDocument();
    });

    const closeButton = screen.queryByLabelText("Close");
    expect(closeButton).not.toBeInTheDocument();
  });
});

describe("Modal - Footer", () => {
  test("renders modal with footer", async () => {
    const user = userEvent.setup();
    render(FooterModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Footer Content")).toBeInTheDocument();
    });
  });
});

describe("Modal - Fullscreen", () => {
  test("renders fullscreen modal", async () => {
    const user = userEvent.setup();
    render(FullscreenModal);

    const trigger = screen.getByText("Open Modal");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Fullscreen Modal")).toBeInTheDocument();
    });
  });
});
