<form>
  <label for="chat" class="sr-only">Your message</label>
  <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
      <ImageOutline class="w-6 h-6" />
      <span class="sr-only">Upload image</span>
    </ToolbarButton>
    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
      <FaceGrinOutline class="w-6 h-6" />
      <span class="sr-only">Add emoji</span>
    </ToolbarButton>
    <Textarea id="chat" class="mx-4 bg-white dark:bg-gray-800" rows="1" placeholder="Your message..." />
    <ToolbarButton color="blue" class="rounded-full text-primary-600 dark:text-primary-500">
      <PaperPlaneOutline class="w-6 h-6 rotate-45" />
      <span class="sr-only">Send message</span>
    </ToolbarButton>
  </div>
</form>